import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async findAllProfiles(): Promise<Profile[]> {
    const profiles = await this.profileRepository.find();
    return profiles;
  }

  async findProfileById(id: string): Promise<Profile> {
    const profile = await this.profileRepository.findOne(id);
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  async createProfile(data: CreateProfileInput): Promise<Profile> {
    const profile = this.profileRepository.create(data);
    const profileSaved = await this.profileRepository.save(profile);
    if (!profileSaved) {
      throw new InternalServerErrorException('profile creation error');
    }
    return profileSaved;
  }

  async updateProfile(id: string, data: UpdateProfileInput): Promise<Profile> {
    const profile = await this.findProfileById(id);

    await this.profileRepository.update(profile, { ...data });

    const profileUpdated = this.profileRepository.create({
      ...profile,
      ...data,
    });

    return profileUpdated;
  }

  async deleteProfile(id: string): Promise<boolean> {
    const profile = await this.findProfileById(id);

    const deleted = await this.profileRepository.delete(profile);

    if (deleted) {
      return true;
    }

    return false;
  }
}

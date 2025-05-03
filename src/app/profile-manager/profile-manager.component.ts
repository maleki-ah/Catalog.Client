import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Profile } from '../models/profile';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-profile-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.scss']
})
export class ProfileManagerComponent {
  profiles: Profile[] = [];
  newProfile: Profile = new Profile(0, '', '');
  isAddVisible: boolean = false;
  isEditMode: boolean = false;
  profileToDelete: number | null = null;
  accordionTitle: string = 'Add New Profile';
  private deleteModalInstance: bootstrap.Modal | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.profiles = [
      new Profile(1, 'Amirhossein', 'Maleki'),
      new Profile(2, 'Sara', 'Amirhosseini')
    ];
  }

  toggleForm(): void {
    this.isAddVisible = !this.isAddVisible;
    this.accordionTitle = this.isEditMode ? 'Edit Profile' : 'Add New Profile';
    if (!this.isAddVisible) this.clearForm();
  }

  // Enhanced validation method
  saveProfile(profileForm: NgForm): void {
    // Check if the form is valid
    if (!profileForm.valid) {
      alert('Please fill out the form correctly.');
      return;
    }

    // ID should be a valid number
    if (!this.newProfile.id || isNaN(this.newProfile.id)) {
      alert('Profile ID must be a valid number.');
      return;
    }

    // First Name and Last Name should contain only alphabetic characters
    const namePattern = /^[a-zA-Z]+$/;
    if (!namePattern.test(this.newProfile.firstName)) {
      alert('First Name should only contain letters.');
      return;
    }
    if (!namePattern.test(this.newProfile.lastName)) {
      alert('Last Name should only contain letters.');
      return;
    }

    // Proceed to save profile
    if (this.isEditMode) {
      const index = this.profiles.findIndex(p => p.id === this.newProfile.id);
      if (index !== -1) this.profiles[index] = { ...this.newProfile };
    } else {
      const exists = this.profiles.some(p => p.id === this.newProfile.id);
      if (exists) {
        alert('Profile ID already exists!');
        return;
      }
      this.profiles.push({ ...this.newProfile });
    }

    this.clearForm();
    this.isAddVisible = false;
    alert('Profile saved successfully!');
  }

  editProfile(profile: Profile): void {
    this.newProfile = { ...profile };
    this.isEditMode = true;
    this.accordionTitle = 'Edit Profile';
    this.isAddVisible = true;
  }

  deleteProfile(id: number): void {
    this.profileToDelete = id;
    if (isPlatformBrowser(this.platformId)) {
      const modalElement = document.getElementById('deleteModal');
      if (modalElement) {
        this.deleteModalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
        this.deleteModalInstance.show();
      }
    }
  }

  confirmDelete(): void {
    if (this.profileToDelete !== null) {
      this.profiles = this.profiles.filter(p => p.id !== this.profileToDelete);
      this.profileToDelete = null;
    }

    if (this.deleteModalInstance) {
      this.deleteModalInstance.hide();
    }

    alert('Profile deleted successfully!');
  }

  viewDetails(profile: Profile): void {
    alert(`ID: ${profile.id}\nFirst Name: ${profile.firstName}\nLast Name: ${profile.lastName}`);
  }

  clearForm(): void {
    this.newProfile = new Profile(0, '', '');
    this.isEditMode = false;
    this.accordionTitle = 'Add New Profile';
    // Clear the modal instance if needed
    if (this.deleteModalInstance) {
      this.deleteModalInstance.hide();
    }
  }
}

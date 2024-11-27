import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';




interface Blog {
  id: number;
  name: string;
  title: string;
  content: string;
  imgSrc: string;
}



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone : true,
  imports : [FormsModule ,NgIf ,NgFor]
})

export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = []; // New array to store filtered results
  newBlog: Blog = { id: 0, name: '', title: '', content: '', imgSrc: '' };
  errorMessage: string = '';
  searchTerm: string = '';
  searchMessage: string = 'Search with country name';
  

  ngOnInit() {
    this.loadBlogs();
    this.filteredBlogs = this.blogs; // Initialize filteredBlogs with all blogs
  }

  loadBlogs(): void {
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      this.blogs = JSON.parse(savedBlogs);
      this.filteredBlogs = this.blogs; // Ensure filteredBlogs gets updated after loading
    }
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.newBlog.imgSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addBlog(): void {
    if (!this.newBlog.name || !this.newBlog.title || !this.newBlog.content) {
      this.errorMessage = 'All fields are required!';
      return;
    }

    const blog: Blog = { 
      id: new Date().getTime(), 
      name: this.newBlog.name, 
      title: this.newBlog.title, 
      content: this.newBlog.content, 
      imgSrc: this.newBlog.imgSrc || '' 
    };
    
    this.blogs.push(blog);
    this.saveBlogs();
    this.filteredBlogs = this.blogs; 
    this.resetForm();
  }

  saveBlogs(): void {
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }

  deleteBlog(blogId: number): void {
    this.blogs = this.blogs.filter(blog => blog.id !== blogId);
    this.saveBlogs();
    this.filteredBlogs = this.blogs; 
  }

  searchBlogs(): void {
    const searchLower = this.searchTerm.toLowerCase();
    
    
    this.filteredBlogs = this.blogs.filter(blog =>
      blog.name.toLowerCase().includes(searchLower)
    );
    

   this.searchMessage = this.filteredBlogs.length > 0 ? '' : 'No Country Blogs Found With The Entered Letters';
  }

  resetForm(): void {
    this.newBlog = { id: 0, name: '', title: '', content: '', imgSrc: '' };
    this.errorMessage = '';
  }
}

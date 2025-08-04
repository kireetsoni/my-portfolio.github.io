// Photography Portfolio JavaScript

// Gallery data
const galleryData = {
    images: [
      {
        id: 1,
        title: "Mountain Sunrise",
        category: "Nature",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 2,
        title: "Portrait Session",
        category: "Portraits",
        url: "https://images.unsplash.com/photo-1494790108755-2616b612b605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 3,
        title: "Wedding Day",
        category: "Events",
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 4,
        title: "City Life",
        category: "Street Photography",
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 5,
        title: "Forest Path",
        category: "Nature",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 6,
        title: "Business Portrait",
        category: "Portraits",
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 7,
        title: "Concert Night",
        category: "Events",
        url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 8,
        title: "Urban Art",
        category: "Street Photography",
        url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 9,
        title: "Ocean Waves",
        category: "Nature",
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 10,
        title: "Family Portrait",
        category: "Portraits",
        url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 11,
        title: "Corporate Event",
        category: "Events",
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 12,
        title: "Street Market",
        category: "Street Photography",
        url: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      }
    ]
  };
  
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
  });
  
  // Initialize the application
  function initializeApp() {
    console.log('Initializing gallery...');
    initializeGallery();
    setupEventListeners();
    setupSmoothScrolling();
    setupScrollAnimations();
    console.log('App initialized successfully');
  }
  
  // Initialize Gallery
  function initializeGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    if (!galleryGrid) {
      console.error('Gallery grid not found');
      return;
    }
  
    console.log('Loading', galleryData.images.length, 'images...');
    
    // Clear existing content
    galleryGrid.innerHTML = '';
    
    galleryData.images.forEach((image, index) => {
      const galleryItem = createGalleryItem(image, index);
      galleryGrid.appendChild(galleryItem);
    });
    
    console.log('Gallery loaded successfully');
  }
  
  // Create Gallery Item
  function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery__item';
    item.setAttribute('data-category', image.category);
    item.style.animationDelay = `${index * 0.1}s`;
    
    item.innerHTML = `
      <img class="gallery__image" src="${image.url}" alt="${image.title}" loading="lazy">
      <div class="gallery__overlay">
        <h3 class="gallery__title">${image.title}</h3>
        <p class="gallery__category">${image.category}</p>
      </div>
    `;
    
    // Add click event to open modal
    item.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Opening modal for:', image.title);
      openModal(image);
    });
    
    return item;
  }
  
  // Setup Event Listeners
  function setupEventListeners() {
    // Get DOM elements
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('image-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
  
    // Mobile menu toggle
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.toggle('active');
        console.log('Mobile menu toggled');
      });
    }
  
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', function(e) {
        if (navMenu) {
          navMenu.classList.remove('active');
        }
      });
    });
  
    // Gallery filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');
        console.log('Filtering gallery by:', filter);
        filterGallery(filter);
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
  
    // Contact form submission
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
  
    // Modal event listeners
    if (modalClose) {
      modalClose.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
      });
    }
    
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
      });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
      }
    });
  
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
  }
  
  // Filter Gallery
  function filterGallery(category) {
    const items = document.querySelectorAll('.gallery__item');
    console.log('Filtering', items.length, 'items by category:', category);
    
    items.forEach((item, index) => {
      const itemCategory = item.getAttribute('data-category');
      
      if (category === 'All' || itemCategory === category) {
        item.classList.remove('hidden');
        item.style.animationDelay = `${index * 0.05}s`;
        // Reset and restart animation
        item.style.animation = 'none';
        setTimeout(() => {
          item.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, 10);
      } else {
        item.classList.add('hidden');
      }
    });
  }
  
  // Modal Functions
  function openModal(image) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    
    if (!modal || !modalImage || !modalTitle || !modalCategory) {
      console.error('Modal elements not found');
      return;
    }
    
    modalImage.src = image.url;
    modalImage.alt = image.title;
    modalTitle.textContent = image.title;
    modalCategory.textContent = image.category;
    
    modal.classList.remove('hidden');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    const modal = document.getElementById('image-modal');
    
    if (!modal) return;
    
    modal.classList.remove('active');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }, 250);
  }
  
  // Form Validation and Submission
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    
    const contactForm = document.getElementById('contact-form');
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Clear previous error states
    clearFormErrors();
    
    let isValid = true;
    
    // Validate name
    if (!name) {
      showFieldError('name', 'Name is required');
      isValid = false;
    }
    
    // Validate email
    if (!email) {
      showFieldError('email', 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showFieldError('email', 'Please enter a valid email address');
      isValid = false;
    }
    
    // Validate message
    if (!message) {
      showFieldError('message', 'Message is required');
      isValid = false;
    } else if (message.length < 10) {
      showFieldError('message', 'Message must be at least 10 characters long');
      isValid = false;
    }
    
    if (isValid) {
      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      setTimeout(() => {
        // Show success message
        showSuccessMessage('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        clearFormErrors();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1500);
    }
  }
  
  function showSuccessMessage(message) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
      background-color: var(--color-success);
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      margin-top: 16px;
      text-align: center;
      font-weight: 500;
    `;
    successDiv.textContent = message;
    
    // Add to form
    const contactForm = document.getElementById('contact-form');
    const existingSuccess = contactForm.querySelector('.success-message');
    if (existingSuccess) {
      existingSuccess.remove();
    }
    contactForm.appendChild(successDiv);
    
    // Remove after 5 seconds
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.remove();
      }
    }, 5000);
  }
  
  function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = field.parentNode.querySelector('.error-message');
    
    field.classList.add('error');
    errorElement.textContent = message;
  }
  
  function clearFormErrors() {
    const contactForm = document.getElementById('contact-form');
    const fields = contactForm.querySelectorAll('.form-control');
    const errorMessages = contactForm.querySelectorAll('.error-message');
    
    fields.forEach(field => {
      field.classList.remove('error', 'success');
    });
    
    errorMessages.forEach(error => {
      error.textContent = '';
    });
    
    // Remove any existing success messages
    const successMessage = contactForm.querySelector('.success-message');
    if (successMessage) {
      successMessage.remove();
    }
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Smooth Scrolling
  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
          const header = document.querySelector('.header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          console.log('Smooth scrolling to:', href);
        }
      });
    });
  }
  
  // Header Scroll Effect
  function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const scrolled = window.scrollY > 100;
    
    if (scrolled) {
      header.style.background = 'rgba(252, 252, 249, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(252, 252, 249, 0.95)';
      header.style.boxShadow = 'none';
    }
  }
  
  // Scroll Animations
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.section__header, .about__content, .about__image, .contact__info, .contact__form');
    
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });
  }
  
  // Utility Functions
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Add resize listener for responsive adjustments
  window.addEventListener('resize', debounce(function() {
    const navMenu = document.getElementById('nav-menu');
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth > 768 && navMenu) {
      navMenu.classList.remove('active');
    }
  }, 250));
  
  // Prevent context menu on gallery images (optional)
  document.addEventListener('contextmenu', function(e) {
    if (e.target.classList.contains('gallery__image') || e.target.classList.contains('modal__image')) {
      e.preventDefault();
    }
  });
  
  // Image loading handlers
  document.addEventListener('DOMContentLoaded', function() {
    // Handle image loading states
    setTimeout(() => {
      const images = document.querySelectorAll('.gallery__image');
      
      images.forEach(img => {
        img.addEventListener('load', function() {
          this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
          this.style.opacity = '0.5';
          this.alt = 'Image failed to load';
          console.error('Failed to load image:', this.src);
        });
      });
    }, 500);
  });
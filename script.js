/* ===================================
   PixelPerfect HD - JavaScript Logic
   Handles file upload, processing simulation, and comparison slider
   =================================== */

// Global Variables
let uploadedFile = null;
let selectedResolution = '4K'; // Default resolution
let originalFileName = '';

// DOM Elements
const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.getElementById('browseBtn');
const imagePreview = document.getElementById('imagePreview');
const previewImage = document.getElementById('previewImage');
const removeImage = document.getElementById('removeImage');
const resolutionBtns = document.querySelectorAll('.resolution-btn');
const upscaleBtn = document.getElementById('upscaleBtn');
const uploadSection = document.getElementById('uploadSection');
const loadingSection = document.getElementById('loadingSection');
const resultSection = document.getElementById('resultSection');
const originalImage = document.getElementById('originalImage');
const upscaledImage = document.getElementById('upscale
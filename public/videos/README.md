# Video Background Files

## Instructions

This folder contains background videos for the Contact page.

### Required Files:
- `contact-bg.mp4` - Main video file (MP4 format)
- `contact-bg.webm` - Optional WebM format for better compression

---

## Download Free Small Video Files (Under 5MB)

### Recommended Sources:

1. **Pexels Videos (Free, No attribution required)**
   - Search: "office teamwork" or "business meeting"
   - Download link examples:
     - https://www.pexels.com/video/people-working-in-an-office-3209828/
     - https://www.pexels.com/video/business-people-having-a-meeting-3195394/
     - https://www.pexels.com/video/team-collaboration-3205737/

2. **Pixabay Videos (Free)**
   - https://pixabay.com/videos/search/office/
   - https://pixabay.com/videos/search/teamwork/

3. **Coverr (Free)**
   - https://coverr.co/videos/business
   - https://coverr.co/videos/office

---

## How to Add Videos:

### Option 1: Download from Sources Above
1. Visit one of the links above
2. Download the video in **HD quality** (1280x720)
3. Make sure the file is **under 5MB**
4. Rename it to `contact-bg.mp4`
5. Place it in this folder: `d:\Tasks\stackly90\public\videos\`

### Option 2: Use Direct Small Video URLs

If you want to use external URLs instead of local files, update the Contact.js file to use these small video URLs:

**Small MP4 Videos (Under 5MB):**

```html
<!-- Option 1: Mixkit - Office Work (2.4MB) -->
https://assets.mixkit.co/videos/preview/mixkit-business-people-working-together-in-an-office-4610-small.mp4

<!-- Option 2: Coverr - Team Meeting (3.1MB) -->
https://coverr-main-prod.imgix.net/videos/coverr-team-meeting-in-a-modern-office-4184/preview

<!-- Option 3: Pexels - Office Collaboration -->
https://player.vimeo.com/external/371433846.sd.mp4?s=1234567890
```

---

## Video Specifications:

- **Format**: MP4 (H.264 codec)
- **Size**: Under 5MB
- **Resolution**: 1280x720 (HD) or 1920x1080 (Full HD)
- **Duration**: 10-30 seconds (will loop automatically)
- **Audio**: None required (video will be muted)
- **Frame Rate**: 24-30 fps

---

## Compression Tools (if video is too large):

### Online Tools:
1. **FreeConvert**: https://www.freeconvert.com/video-compressor
2. **Clideo**: https://clideo.com/compress-video
3. **Online-Convert**: https://www.online-convert.com/

### Desktop Software:
1. **HandBrake** (Free): https://handbrake.fr/
2. **VLC Media Player** (Free): Can convert and compress videos

### Compression Settings:
- Codec: H.264
- Bitrate: 1000-2000 kbps
- Resolution: 1280x720
- Frame rate: 24-30 fps

---

## Current Status:

❌ `contact-bg.mp4` - Not yet added (please download and add)
❌ `contact-bg.webm` - Not yet added (optional)

Once you add the video file to this folder, the Contact page background video will work automatically!

---

## Quick Start - Using External URL (Temporary Solution):

If you want to test the video background immediately without downloading, you can update the Contact.js file to use this direct URL:

```javascript
<source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-working-together-in-an-office-4610-small.mp4" type="video/mp4" />
```

This is a small 2.4MB video that works well as a background.

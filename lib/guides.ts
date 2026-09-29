import { GuideItem } from './types';

export const INSTALLATION_GUIDES: GuideItem[] = [
  {
    slug: 'ibo-player',
    title: 'How to Install and Set Up IBO Player on Smart TV & Android',
    shortTitle: 'IBO Player Setup Guide',
    device: 'Samsung TV, LG webOS, Android TV & Firestick',
    category: 'Smart TV & Android',
    difficulty: 'Quick',
    durationMinutes: 7,
    description:
      'IBO Player is one of the highest-rated media players for modern Smart TVs and streaming devices, boasting lightning-fast zapping speeds and an intuitive Netflix-style EPG interface.',
    requirements: [
      'Compatible Smart TV (Samsung Tizen 2018+, LG webOS 4.0+) or Android / Fire TV device',
      'Active TVYouTube.pro subscription credentials (M3U URL or Xtream Codes login)',
      'Internet connection with 25+ Mbps for 4K / HD playback',
      'A smartphone or laptop browser to upload your playlist credentials to the official IBO portal',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Install IBO Player from Your Device App Store',
        description:
          'Open your television or device official app store (Samsung Smart Hub, LG Content Store, Google Play Store, or Amazon Appstore). Search for "IBO Player" and click Install / Download. Note: Always download from the official device store; never sideload untrusted APK clones.',
      },
      {
        stepNumber: 2,
        title: 'Launch the Application',
        description:
          'Once downloaded, launch IBO Player from your device home screen. You will be greeted with the initial welcome screen and a 7-day initial trial prompt provided directly by the player developer.',
      },
      {
        stepNumber: 3,
        title: 'Locate Your Device MAC & Device Key',
        description:
          'On the startup screen or inside the Settings menu, note down your unique "Device MAC Address" (formatted like 00:1A:79:XX:XX:XX) and your 6-digit "Device Key". Keep this screen open or write down these two identifiers.',
        tip: 'Both the Device MAC and Device Key are unique hardware hashes required to safely pair your playlist without entering lengthy URLs using your TV remote.',
      },
      {
        stepNumber: 4,
        title: 'Open the Official IBO Portal in a Browser',
        description:
          'On your computer, tablet, or smartphone, visit the official management portal at https://iboplayer.com/device/login. Enter your Device MAC and Device Key, then click "Login".',
      },
      {
        stepNumber: 5,
        title: 'Add Your TVYouTube.pro Playlist',
        description:
          'Click on "+ Add Playlist" or "+ Add XC Playlist". Enter a recognizable name (e.g., "TVYouTube.pro Premium"), then input either your M3U URL or your Xtream Codes API details (Server URL, Username, and Password) received in your activation email.',
      },
      {
        stepNumber: 6,
        title: 'Save and Reload',
        description:
          'Click "Save Playlist". Back on your television screen, return to the IBO Player home screen and select "Reload / Refresh Playlist". The app will synchronize your live channels, EPG guide, and video-on-demand library within seconds.',
      },
      {
        stepNumber: 7,
        title: 'Start Watching',
        description:
          'Select "Live TV" to browse channels with full EPG schedules, or "Movies" / "Series" to enjoy full on-demand streaming with 4K HDR playback and audio track selection.',
      },
    ],
    troubleshooting: [
      {
        issue: '"Playlist loading failed" or "No channels found"',
        solution:
          'Verify that there are no extra spaces at the beginning or end of your M3U URL or Xtream Codes credentials in the IBO portal. Also ensure your TV has an active internet connection.',
      },
      {
        issue: 'Buffering or stuttering on 4K sports channels',
        solution:
          'Inside IBO Player Settings > Player Engine, switch between "Hardware Decoder" (HW) and "Software Decoder" (SW). In most smart TVs, HW decoder utilizes GPU acceleration.',
      },
      {
        issue: 'EPG (TV Guide) not displaying current schedule',
        solution:
          'Go to Settings > Time Shift / EPG and ensure your local time zone is properly configured to match your location.',
      },
    ],
    faqs: [
      {
        question: 'Is IBO Player free?',
        answer:
          'IBO Player offers a 7-day free trial directly from the application developer. After the trial, a one-time activation fee is paid directly on their official site. TVYouTube.pro provides the content subscription stream.',
      },
      {
        question: 'Can I use IBO Player on multiple TVs with one subscription?',
        answer:
          'You can install the app on multiple devices. Simultaneous playback depends on your chosen TVYouTube.pro plan (e.g., 6-month and 12-month plans include 2 concurrent connections).',
      },
    ],
  },
  {
    slug: 'firestick',
    title: 'How to Install IPTV on Amazon Fire TV Stick / Cube',
    shortTitle: 'Amazon Firestick Guide',
    device: 'Amazon Fire TV Stick 4K, Max, Cube & Fire TV',
    category: 'Streaming Sticks',
    difficulty: 'Easy',
    durationMinutes: 8,
    description:
      'A complete step-by-step walkthrough to set up your TVYouTube.pro IPTV subscription on any Amazon Fire TV Stick model using the trusted Downloader application.',
    requirements: [
      'Amazon Fire TV Stick connected to HDMI and WiFi',
      'Amazon account logged in to access the Amazon Appstore',
      'Downloader App (free on Amazon Appstore)',
      'TVYouTube.pro activation credentials',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Install Downloader App',
        description:
          'From your Fire TV home screen, click "Find" > "Search". Type "Downloader", select the orange Downloader icon from results, and click "Get" or "Download".',
      },
      {
        stepNumber: 2,
        title: 'Enable Unknown Apps Permission',
        description:
          'Go to Fire TV Settings (gear icon) > My Fire TV > Developer Options. Click "Install Unknown Apps" and toggle "Downloader" to ON. (If Developer Options is hidden, click About > Fire TV Stick 7 times rapidly to reveal it).',
      },
      {
        stepNumber: 3,
        title: 'Install Recommended Player',
        description:
          'Launch Downloader, enter the numeric quick code for your preferred player (e.g., TiviMate or IPTV Smarters Pro), click Go, and follow the on-screen prompt to Install.',
      },
      {
        stepNumber: 4,
        title: 'Log In with Xtream Codes Credentials',
        description:
          'Open your installed player, choose "Login with Xtream Codes API", and input your Server URL, Username, and Password provided in your TVYouTube.pro welcome email.',
      },
      {
        stepNumber: 5,
        title: 'Enjoy Live TV and Movies',
        description:
          'Allow the player to load channels and EPG data. Once complete, you are ready to enjoy full HD and 4K entertainment.',
      },
    ],
    troubleshooting: [
      {
        issue: 'Developer Options is missing in Fire TV Settings',
        solution:
          'Navigate to Settings > My Fire TV > About. Highlight "Fire TV Stick" and press the Select button on your remote 7 times. A toast notification will state "You are now a developer".',
      },
      {
        issue: 'Downloader shows error 403 or blocked page',
        solution: 'Check your internet connection or restart your Firestick from Settings > My Fire TV > Restart.',
      },
    ],
    faqs: [
      {
        question: 'Which Firestick model provides the best performance?',
        answer:
          'Fire TV Stick 4K Max (2nd Gen) and Fire TV Cube offer the fastest processors and Wi-Fi 6E support, providing near-instant channel changing.',
      },
    ],
  },
  {
    slug: 'android',
    title: 'How to Install IPTV on Android TV, Google TV & Android Boxes',
    shortTitle: 'Android TV & Google TV Guide',
    device: 'Google TV Chromecast, Nvidia Shield, Sony Bravia, Xiaomi Box',
    category: 'Android TV',
    difficulty: 'Easy',
    durationMinutes: 5,
    description:
      'Easily set up your IPTV subscription on modern Android TV and Google TV platforms with official Google Play Store applications.',
    requirements: [
      'Android TV or Google TV device connected to your network',
      'Google Play Store account',
      'TVYouTube.pro credentials',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Open Google Play Store',
        description:
          'On your Android TV or Google TV dashboard, navigate to the "Apps" tab and launch the official Google Play Store.',
      },
      {
        stepNumber: 2,
        title: 'Search for "TiviMate" or "IBO Player"',
        description:
          'Search for top-tier IPTV players like TiviMate IPTV Player or IBO Player directly in the store, and click "Install".',
      },
      {
        stepNumber: 3,
        title: 'Add TVYouTube.pro Account',
        description:
          'Open the app, select "+ Add Playlist", choose "Xtream Codes API", and type your credentials from your confirmation email.',
      },
      {
        stepNumber: 4,
        title: 'Configure EPG and Refresh',
        description:
          'Allow 30 seconds for the guide data to download. You can now sort by genres, set favorite channels, and switch audio tracks.',
      },
    ],
    troubleshooting: [
      {
        issue: 'Audio out of sync with video',
        solution: 'In playback settings, switch audio output from Passthrough to PCM or adjust audio delay by -100ms.',
      },
    ],
    faqs: [
      {
        question: 'Is Nvidia Shield good for IPTV?',
        answer:
          'The Nvidia Shield TV Pro is widely regarded as one of the best IPTV devices due to its AI 4K upscaling and gigabit ethernet connection.',
      },
    ],
  },
  {
    slug: 'smart-tv',
    title: 'How to Set Up IPTV on Samsung & LG Smart TVs',
    shortTitle: 'Samsung & LG Smart TV Guide',
    device: 'Samsung Tizen OS & LG webOS',
    category: 'Smart TVs',
    difficulty: 'Quick',
    durationMinutes: 6,
    description:
      'Native Smart TV installation without requiring external dongles or cables, using official store-approved players.',
    requirements: [
      'Samsung Smart TV (2018 or newer) or LG Smart TV with webOS',
      'Broadband internet connection',
      'TVYouTube.pro subscription login',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Search Your TV App Store',
        description:
          'On Samsung, press Home and open "Apps". On LG, open the "LG Content Store". Search for "IBO Player" or "Smart IPTV".',
      },
      {
        stepNumber: 2,
        title: 'Install and Note MAC Address',
        description:
          'Launch the application and write down the Device MAC and Key displayed on your TV screen.',
      },
      {
        stepNumber: 3,
        title: 'Upload M3U Playlist',
        description:
          'Visit the player web portal on your phone or laptop, enter the TV MAC, and paste your TVYouTube.pro M3U Plus URL.',
      },
      {
        stepNumber: 4,
        title: 'Reload TV App',
        description:
          'Press the reload button on your TV remote to instantly display all live channels and on-demand titles.',
      },
    ],
    troubleshooting: [
      {
        issue: 'App does not appear in TV store',
        solution:
          'Check that your TV firmware is updated to the latest version via TV Settings > Support > Software Update.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a Firestick if I have a Samsung Smart TV?',
        answer:
          'No! If your Samsung TV runs Tizen OS, you can run IBO Player or Nanomid directly on the TV without needing an external streaming stick.',
      },
    ],
  },
  {
    slug: 'apple-tv',
    title: 'How to Install IPTV on Apple TV 4K & iOS',
    shortTitle: 'Apple TV 4K & iOS Guide',
    device: 'Apple TV 4K, Apple TV HD, iPad, iPhone',
    category: 'Apple Ecosystem',
    difficulty: 'Easy',
    durationMinutes: 5,
    description:
      'Experience butter-smooth 60fps streaming and native tvOS navigation on Apple TV 4K with premium players.',
    requirements: [
      'Apple TV 4K or Apple TV HD with tvOS 14+',
      'Active Apple ID',
      'TVYouTube.pro subscription credentials',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Open the Apple TV App Store',
        description:
          'From your Apple TV home screen, open the App Store and search for "IPTVX" or "Smarters Player Lite" or "IBO Player".',
      },
      {
        stepNumber: 2,
        title: 'Download and Open Player',
        description:
          'Download your preferred application and grant network permissions when prompted.',
      },
      {
        stepNumber: 3,
        title: 'Connect Your Playlist',
        description:
          'Select Xtream Codes API or M3U URL. Use your iPhone keyboard continuity feature to paste your credentials effortlessly.',
      },
      {
        stepNumber: 4,
        title: 'Start Streaming in 4K HDR',
        description:
          'Take advantage of Apple TV A15 Bionic video processing for rapid channel switching and beautiful typography.',
      },
    ],
    troubleshooting: [
      {
        issue: 'Player crashes on heavy playlist',
        solution:
          'In player settings, disable "Auto-sync VOD on launch" or allocate higher buffer cache under Advanced Network Settings.',
      },
    ],
    faqs: [
      {
        question: 'Does Apple TV support Dolby Atmos on IPTV streams?',
        answer:
          'Yes, when the specific channel or VOD release includes Dolby Digital / Atmos multi-channel audio tracks, Apple TV automatically decodes it.',
      },
    ],
  },
];

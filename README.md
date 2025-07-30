# RFM Segmentation Dashboard

Advanced customer segmentation interface using Recency, Frequency, and Monetary (RFM) analysis with modern React architecture.

## 🚀 Features

- **5x5 Grid Visualization**: Interactive grid showing customer segments
- **Advanced Filtering**: Real-time filtering by Recency, Frequency, and Monetary scores
- **Dual View Modes**: Grid and List view options
- **Modern UI**: Dark theme with gradient effects and smooth animations
- **Real-time Statistics**: Live updates of customer counts and selections
- **Error Handling**: Comprehensive error boundaries and validation
- **Performance Optimized**: React.memo, useCallback, and useMemo optimizations
- **React Query Integration**: Robust API state management with caching

## 🏗️ Architecture

### Feature-Based Structure
```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Main page
├── features/              # Feature-based organization
│   └── rfm/              # RFM Feature
│       ├── components/    # RFM-specific components
│       │   ├── CustomerGridCell.js
│       │   └── CustomerListCard.js
│       ├── services/      # RFM business logic
│       │   └── rfmService.js
│       ├── utils/         # RFM utilities
│       │   └── rfmCalculator.js
│       └── index.js       # Feature exports
├── shared/                # Shared resources
│   ├── ui/               # Reusable UI components
│   │   ├── StatsCard.js
│   │   ├── TabButton.js
│   │   ├── FilterDropdown.js
│   │   ├── SubmitButton.js
│   │   └── index.js
│   ├── layout/           # Layout components
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   ├── MainContent.js
│   │   └── index.js
│   ├── hooks/            # Shared hooks
│   │   ├── useRFMState.js
│   │   ├── useApi.js
│   │   └── index.js
│   ├── ErrorBoundary.js  # Error handling
│   ├── validation.js     # Validation utilities
│   └── index.js          # Shared exports
├── data/                 # Static data
│   └── customers.json    # Mock customer data
└── lib/                  # Third-party integrations
```

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Query (@tanstack/react-query)
- **UI Components**: React Icons
- **Notifications**: React Toastify
- **Validation**: Custom validation utilities
- **Error Handling**: Custom Error Boundary

## 📊 RFM Algorithm

### Scoring System (1-5 Scale)
- **Recency**: Days since last purchase (1 = recent, 5 = old)
- **Frequency**: Number of purchases (1 = low, 5 = high)
- **Monetary**: Total spend amount (1 = low, 5 = high)

### Segment Classification
- **Champions** (Score 8-10): High frequency + high monetary
- **Loyal Customers** (Score 6-7): Good frequency + good monetary
- **At Risk** (Score 4-5): Declining engagement
- **Lost** (Score 2-3): Low engagement

## 🎨 UI/UX Features

### Modern Design
- Dark gradient theme
- Glassmorphism effects
- Smooth hover animations
- Responsive grid layout
- Interactive customer cards

### User Experience
- Real-time filtering
- Visual segment indicators
- Bulk selection capabilities
- Toast notifications
- Loading states
- Error recovery

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd rfm-segmentation

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

## 📝 API Endpoints

### POST /api/selected-ids
Sends selected customer IDs to backend.

**Request:**
```json
{
  "selectedIds": [1, 2, 3, 4, 5]
}
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "message": "Successfully processed 5 selected IDs"
}
```

## 🧪 Test Scenarios

### Filtering Tests
- [x] Recency filter (1-5 range)
- [x] Frequency filter (1-5 range)
- [x] Monetary filter (1-5 range)
- [x] Combined filters
- [x] Filter reset functionality

### Selection Tests
- [x] Individual customer selection
- [x] Bulk selection
- [x] Selection persistence
- [x] Selection clearing

### API Tests
- [x] Valid data submission
- [x] Error handling
- [x] Loading states
- [x] Success notifications

## 📈 Performance Metrics

- **Lighthouse Score**: > 90
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔧 Development

### Code Quality
- ESLint configuration
- PropTypes for type checking
- Clean code principles
- SOLID architecture
- Feature-based organization

### Performance Optimizations
- React.memo for components
- useCallback for event handlers
- useMemo for expensive calculations
- Virtual scrolling (planned)
- Code splitting (planned)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For questions or support, please open an issue in the repository.



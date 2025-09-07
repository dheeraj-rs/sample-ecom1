# Royalwood - Premium Handcrafted Furniture E-commerce

A production-ready e-commerce platform for handcrafted wooden furniture, built with Next.js, TypeScript, and modern web technologies.

## 🌟 Features

### Frontend
- **Modern UI/UX**: Beautiful, responsive design with wood-inspired theme
- **Advanced Product Experience**: 3D model viewer, high-resolution galleries, detailed specifications
- **Smart Search & Filtering**: Multi-level categories, faceted search, AI-powered recommendations
- **Shopping Cart & Wishlist**: Persistent state with local storage fallback
- **User Accounts**: Order history, saved addresses, reviews, and preferences
- **Performance Optimized**: SSR/SSG, lazy loading, image optimization, code splitting

### Backend
- **Scalable Architecture**: Next.js API routes with TypeScript
- **Database**: MongoDB with optimized schemas and indexing
- **Authentication**: JWT-based auth with refresh tokens
- **Payment Processing**: Stripe integration for secure payments
- **File Storage**: Cloudinary/S3 for media with CDN delivery
- **Real-time Features**: WebSocket support for live updates

### Admin Dashboard
- **Comprehensive Management**: Products, orders, customers, inventory
- **Analytics**: Sales reports, conversion tracking, performance metrics
- **Role-based Access**: Owner, manager, and content editor roles
- **Dynamic Pricing**: Real-time wood and labor cost updates

### Performance & Scale
- **Caching Strategy**: Redis for sessions and frequently accessed data
- **CDN Integration**: Global content delivery for fast loading
- **Database Optimization**: Proper indexing and query optimization
- **Monitoring**: Error tracking, performance monitoring, health checks

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js App   │────│   API Routes    │────│    MongoDB      │
│   (Frontend)    │    │   (Backend)     │    │   (Database)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
    ┌─────────┐            ┌──────────┐            ┌──────────┐
    │   CDN   │            │  Redis   │            │   S3     │
    │(Assets) │            │ (Cache)  │            │(Storage) │
    └─────────┘            └──────────┘            └──────────┘
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account
- Stripe account for payments
- Cloudinary account for media (optional)

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd royalwood
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # Authentication
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   
   # Stripe
   STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   
   # Redis (optional)
   REDIS_URL=your_redis_url
   
   # Media Storage
   CLOUDINARY_URL=your_cloudinary_url
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 📁 Project Structure

```
royalwood/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes
│   ├── (shop)/            # Shopping routes
│   ├── account/           # User account
│   ├── admin/             # Admin dashboard
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── product/          # Product components
│   └── providers/        # Context providers
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── types/                # TypeScript definitions
└── public/               # Static assets
```

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **3D Models**: React Three Fiber
- **State Management**: React Context + useReducer
- **Forms**: React Hook Form + Zod validation

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **File Upload**: Cloudinary
- **Email**: Resend
- **Caching**: Redis

### DevOps & Deployment
- **Deployment**: Vercel (Frontend) + Railway/Heroku (Backend)
- **Database**: MongoDB Atlas
- **CDN**: Cloudflare
- **Monitoring**: Sentry
- **Analytics**: Vercel Analytics

## 🎨 Design System

### Colors
- **Primary**: Rich Walnut (`hsl(25, 25%, 25%)`)
- **Secondary**: Warm Oak (`hsl(35, 30%, 85%)`)
- **Accent**: Golden Honey (`hsl(42, 87%, 65%)`)
- **Success**: Forest Green (`hsl(142, 76%, 36%)`)
- **Warning**: Amber (`hsl(38, 92%, 50%)`)
- **Error**: Deep Red (`hsl(0, 65%, 51%)`)

### Typography
- **Heading Font**: Playfair Display (serif)
- **Body Font**: Inter (sans-serif)
- **Font Weights**: 400, 500, 600, 700

### Spacing
- **Base Unit**: 4px
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px

## 📊 Database Schema

### Products Collection
```javascript
{
  _id: ObjectId,
  name: String,
  slug: String,
  description: String,
  category: ObjectId,
  pricing: {
    basePrice: Number,
    woodCost: Number,
    laborCost: Number,
    finalPrice: Number
  },
  inventory: {
    quantity: Number,
    status: String
  },
  specifications: {
    dimensions: Object,
    materials: Array,
    craftingTime: Number
  },
  media: {
    images: Array,
    videos: Array,
    models3D: Array
  },
  ratings: {
    average: Number,
    count: Number
  }
}
```

### Orders Collection
```javascript
{
  _id: ObjectId,
  orderNumber: String,
  customerId: ObjectId,
  items: Array,
  pricing: {
    subtotal: Number,
    tax: Number,
    shipping: Number,
    total: Number
  },
  shipping: Object,
  payment: {
    status: String,
    method: String,
    transactionId: String
  },
  fulfillment: {
    status: String,
    timeline: Array
  }
}
```

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint + Prettier configurations
- Use meaningful component and function names
- Implement proper error boundaries
- Add loading states for async operations

### Component Structure
```tsx
// Component props interface
interface ComponentProps {
  // Define props with proper types
}

// Main component function
export function Component({ prop }: ComponentProps) {
  // Hooks at the top
  const [state, setState] = useState();
  
  // Event handlers
  const handleAction = () => {
    // Handle logic
  };
  
  // Render
  return (
    <div>
      {/* JSX content */}
    </div>
  );
}
```

### API Routes
```typescript
// api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Handle GET request
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Performance Tests
```bash
npm run test:performance
```

## 📈 Performance Optimization

### Frontend
- **Code Splitting**: Dynamic imports for components
- **Image Optimization**: Next.js Image component with proper sizing
- **Lazy Loading**: Intersection Observer for non-critical content
- **Bundle Analysis**: Regular bundle size monitoring

### Backend
- **Database Indexing**: Proper indexes for frequently queried fields
- **Caching**: Redis for session data and expensive queries
- **API Rate Limiting**: Prevent abuse and ensure fair usage
- **Connection Pooling**: Efficient database connections

### Monitoring
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Error Tracking**: Sentry integration
- **Performance Monitoring**: Real User Monitoring (RUM)
- **Uptime Monitoring**: Health check endpoints

## 🚀 Deployment

### Production Checklist
- [ ] Environment variables configured
- [ ] Database backups enabled
- [ ] SSL certificates installed
- [ ] CDN configured
- [ ] Monitoring tools set up
- [ ] Error tracking enabled
- [ ] Performance monitoring active

### Deployment Commands
```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel deploy --prod
```

## 🔒 Security

### Best Practices
- **Input Validation**: Zod schemas for all user inputs
- **Authentication**: Secure JWT implementation
- **HTTPS Only**: All communications encrypted
- **Rate Limiting**: API endpoints protected
- **XSS Protection**: Content Security Policy headers
- **CSRF Protection**: Token validation for state changes

### Environment Security
- Never commit `.env` files
- Use strong, unique secrets
- Regularly rotate API keys
- Monitor for security vulnerabilities
- Keep dependencies updated

## 📖 API Documentation

### Products API
```typescript
// GET /api/products
// Query products with filters and pagination

// GET /api/products/[id]
// Get single product details

// POST /api/products (Admin only)
// Create new product

// PUT /api/products/[id] (Admin only)
// Update product

// DELETE /api/products/[id] (Admin only)
// Delete product
```

### Orders API
```typescript
// GET /api/orders
// Get user's orders

// POST /api/orders
// Create new order

// GET /api/orders/[id]
// Get order details

// PUT /api/orders/[id] (Admin only)
// Update order status
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make changes and test thoroughly
4. Commit with descriptive messages: `git commit -m 'Add new feature'`
5. Push to branch: `git push origin feature/new-feature`
6. Submit a pull request

### Development Workflow
1. **Issue Creation**: Create GitHub issue for new features/bugs
2. **Branch Creation**: Create feature branch from main
3. **Development**: Implement changes with tests
4. **Code Review**: Submit PR for peer review
5. **Testing**: Ensure all tests pass
6. **Deployment**: Deploy to staging for final testing
7. **Merge**: Merge to main and deploy to production

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For technical support or questions:
- **Email**: dev@royalwood.com
- **Documentation**: [docs.royalwood.com](https://docs.royalwood.com)
- **Issues**: GitHub Issues for bug reports
- **Discussions**: GitHub Discussions for questions

---

**Made with ❤️ by the Royalwood team**
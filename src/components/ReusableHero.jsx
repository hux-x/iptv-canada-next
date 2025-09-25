import React from 'react';
import Image from 'next/image';

const ReusableHero = ({
  title,
  highlight,
  description,
  secondaryText,
  features = [],
  ctaPrimary,
  ctaSecondary,
  stats = [],
  regions,
  image,
  schema,
}) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 lg:py-32 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl z-0 animate-pulse-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {title}{' '}
              <span className="text-blue-400">{highlight}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
              {description}
            </p>

            {secondaryText && (
              <p className="text-gray-400 mb-6">{secondaryText}</p>
            )}
            
            {/* Key Features */}
            {features.length > 0 && (
              <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-blue-500/20">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
                >
                  {ctaPrimary.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="border-2 border-blue-500 text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-900/50 transition text-center"
                  aria-label={ctaSecondary.aria}
                >
                  {ctaSecondary.label}
                </a>
              )}
            </div>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="flex items-center space-x-8">
                {stats.map(({ label, value, description }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                    <div className="text-xs text-gray-500">{description}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Regions */}
            {regions && (
              <div className="mt-8 text-sm text-gray-400">
                <p>
                  Serving all Canadian provinces: 
                  <span className="text-blue-400 ml-1">{regions}</span>.  
                  Stream anywhere in Canada with one of the{' '}
                  <strong className="text-white">most reliable IPTV services</strong>.
                </p>
              </div>
            )}
          </div>

          {/* Image */}
          {image && (
            <div className="relative group">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md mx-auto"
                priority
              />
              {image.badge && (
                <div className="absolute -bottom-6 left-4 bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-xl animate-fade-in-up">
                  <div className="text-sm text-gray-400">{image.badge.label}</div>
                  <div className="text-2xl font-bold text-green-400 animate-pulse">{image.badge.value}</div>
                  <div className="text-xs text-gray-500">{image.badge.description}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Schema Markup */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </section>
  );
};

export default ReusableHero;

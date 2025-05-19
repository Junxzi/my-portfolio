export default function Projects() {
  return (
    <section className="space-y-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>

      <div className="border p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">Tokyo Rent Prediction</h3>
        <p className="text-sm text-gray-600 mb-2">Built with Python, scikit-learn, and pandas</p>
        <p>
          A regression model to predict apartment rent in Tokyo based on property features. 
          Achieved the highest accuracy in a university seminar competition.
        </p>
      </div>

      <div className="border p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">Financial News Sentiment Analysis</h3>
        <p className="text-sm text-gray-600 mb-2">Built with FinBERT, Python</p>
        <p>
          Analyzed sentiment of news articles for GAFAM stocks and evaluated correlation with returns. 
          Designed for NLP × Finance predictive modeling.
        </p>
      </div>
    </section>
  );
}

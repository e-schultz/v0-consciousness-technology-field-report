interface FetchResultProps {
  url: string
  prediction: string
  reality: string
  accuracy: number
}

export function FetchResult({ url, prediction, reality, accuracy }: FetchResultProps) {
  return (
    <div className="fetch-result">
      <h3 className="font-mono text-[#00ffff] mb-2">{url}</h3>
      <p>
        <strong>Prediction:</strong> {prediction}
      </p>
      <p>
        <strong>Reality:</strong> {reality}
      </p>
      <div className="accuracy-meter">
        <span>Accuracy: {accuracy}/100</span>
        <div className="accuracy-bar">
          <div className="accuracy-fill" style={{ width: `${accuracy}%` }}></div>
        </div>
      </div>
    </div>
  )
}

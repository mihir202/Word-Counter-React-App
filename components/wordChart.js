import React from 'react'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import { connect } from 'react-redux'

const sortedWordList = words => {
  const wordList = Object.keys(words)
  const listOfWordsWithCounts = wordList.map(word => ({word, "Word Count": words[word]}))

  return [...listOfWordsWithCounts].sort((a, b) => (a["Word Count"] < b["Word Count"]) ? 1 : -1)
}

const take10HighestCounts = words => {
  const wordList = sortedWordList(words)

  return wordList.slice(0, 5)
}

const WordChart = props => {
  const words = props.words

  return (
    <div>
      {Object.keys(words).length > 0 && (
        <div>
          <h2>Top 5 Most Used Words</h2>
          <BarChart width={400} height={300}
                    data={take10HighestCounts(words)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Word Count" fill="#82ca9d" />
          </BarChart>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return { words: state.words }
}

export default connect(mapStateToProps)(WordChart)
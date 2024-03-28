/* eslint-disable react/prop-types */
import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';

const PageRead = ({ readBooks }) => {
    // Aggregate data from all read books
    const data = readBooks.map(book => ({ bookName: book.bookName, totalPages: book.totalPages }));

    // Define an array of colors for each bar
    const colors = ['#413ea0', '#ff7300', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <BarChart width={1000} height={600} data={data}>
                <XAxis dataKey="bookName" />
                <YAxis dataKey="totalPages" />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                {data.map((entry, index) => (
                    <Bar key={entry.bookName} dataKey="totalPages" fill={colors[index % colors.length]} />
                ))}
            </BarChart>
        </div>
    );
};

export default PageRead;

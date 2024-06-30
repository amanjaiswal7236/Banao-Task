import React from 'react';

const groups = [
  {
    id: 1,
    name: 'Leisure',
    image: 'https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bASMZv4uJswP-anJk3tc6Zjmn1fF2tVePM8Hjabw55bGskrDnbLt8DKfnJkPVz4hPT4ZI9H5-~3NGv7hQ05eop8NF9txK7CPHCEVy9OQPh~i2yuOSdf8G1OBYcRTzQvBWcaRU65RIxZ8dGhVKzE7eMLuZvt--yU5HCs9xlZjz5lvslzx5-IDKBx2nEJjtEKW3MLX4JwmIxcAmL9u4zms9AiptWplTQHgCle1j75wVNd5PjpGhg~-cUDB7AMU6C2O~w2DXZgWEXROxphoVh00vj0WNGmtXmGdOZ6JsLlTWw~AZTnaSWBu1lSCTIsVSYPXpXR8bqgaeBgSl2QWTOo4-Q__'
  },
  {
    id: 2,
    name: 'Activism',
    image: 'https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PPq~Uvj2O~Hce0SEs2q6kR~TXVobEcLVw3Txp25QuuuJ3rr857EjKvnLdedPfkLv4ky0w28TVB5Z7184H1ZvYfF8vCf5gOVr0UHc35WZ0Y4BuZlkw0Vhps3W-fXc3V7tTNg~T0yyRJH6VTNPBV~diyEw9yalHqcucJDrfvgEZ00XVR3Rihyz1QqnXoJqPQ03MvFxULpnQTeOjFHog1TTbZx2JcRrKdvo2zg0v7vQOcsxfAG6DSNTjBwyi6WUldoGVBDOe70be0HCxr~ppTFhATBcPR9LAqOMgyYk-vpXqS3Z1sfWeR5SzT2n7iM6n0ZyjRfwLjzrholjRsDyBJFQvg__'
  },
  {
    id: 3,
    name: 'MBA',
    image: 'https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JlrHAdnWZ80JW49nSg80mHCpJLp36G38CHsXRHtfugZciLNau6ivMU7Sgk18wGcgSMCYziKP4wdRecDgnyiMfGwwKY-3IJZvcmVkdg6CQ9iL9r9737fIh5HcCFVKe5DEWgbc4T0Z484GHtAPWPXyuoR933QSHje3OA7JtdvWrl5zujTE6PMLklcka5ZOhOsfAYTwp5h8D-n-Qujgh0aGCqc10YOvkVYbCdvRCUUnjifKGRaKJo-rKHCqhbS~pY7cuT11iIqj4IW2h8AgpD6AxlT78Mm6gF9w~9HBY7zczS3dtxEYLI98jaYS4QOYonqbeZky-hrZWtU59~J0nvOeIg__'
  },
  {
    id: 4,
    name: 'Philosophy',
    image: 'https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pj3H1ZvIF416E7fKc00CiVaFGThQhtzNHHUln89k8DKT~1fPKRE4yd1zTnk5q8Plm6hG2eLJapsX7cNi2woB3kiZg81NscFlWmQR3V-c3-EXLm~KJoAKpsEjbiZ2xSTYVuPxmqs3XXTr4BG7OSpoTdM9xq0f5plE90gcimdbMHIoFyKEyJl93szyAabp7VNiZnX2UyyoXsQOu61ZO14m4BNerL9VYflvJsWOalySOBWLIx1UEDk6ijRBoJ62J8m38DuE1~9eBcFGqkyPUpofOnpV9Z9Y4X95gRMwJ3u3Otdgi5U0cW5baXSm2Ow7kNkTKVHkr~ClCeQysBFDKKG~Ww__'
  }
];

function RecommendedGroups() {
  return (
    <div className="bg-white border rounded-md p-4 w-full md:w-60 shadow-md">
      <h3 className="text-black font-bold mb-4 flex items-center">
        <span role="img" aria-label="thumbs-up" className="mr-2">👍</span>
        Recommended Groups
      </h3>
      <div>
        {groups.map(group => (
          <div key={group.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={group.image}
                alt={group.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="text-gray-700">{group.name}</span>
            </div>
            <button className="bg-gray-200 text-gray-700 py-1 px-4 rounded-full text-sm">
              Follow
            </button>
          </div>
        ))}
      </div>
      <a href="#" className="text-blue-500 text-sm mt-4 inline-block">
        See More...
      </a>
    </div>
  );
}

export default RecommendedGroups;

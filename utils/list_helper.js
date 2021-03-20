const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }

    return blogs.reduce(reducer, 0)
}


const favoriteBlog = (blogs) => {
    const result = blogs.map(({ author, likes, title }) => ({
        author, 
        likes, 
        title
    }));
    return result.reduce((max, blog) => max.likes > blog.likes ? max : blog);
}

const mostBlogs = (blogs) => {
    const result = blogs.reduce((result, { author }) => {   
        console.log(result); 
        result[author] = (result[author] || 0) + 1;
        return result
    }, {});
    const temp =  Object.entries(result).map(([author, blogs]) => ({
        author,
        blogs
    }));
    return temp.reduce((max, blog) => max.blogs > blog.blogs ? max : blog);
}

const mostLikes = (blogs) => {
    // const result = blogs.reduce((result, { author, likes }) => {    
    //     result[author] = (result[author] || 0) + likes;
    //     return result
    // }, {});
    // const temp =  Object.entries(result).map(([key, value]) => {
    //     return ({'author': key, 'likes': value})
    // });
    // return temp.reduce((max, blog) => max.likes > blog.likes ? max : blog);

    let final = [...blogs.reduce((op, { author, likes }) => {
        op.set(author, (op.get(author) || 0) + likes)
        return op
      }, new Map()).entries()].filter(([_,repeat]) => repeat > 1).map(([author, likes]) => ({
        author,
        likes
      })).reduce((max, blog) => max.likes > blog.likes ? max : blog);
    
    return final;

}
  
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}
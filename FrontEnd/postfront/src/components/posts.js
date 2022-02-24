function Posts() {
    return (
        <div>
            <div className="album py-3 bg-light">
                <div className="row">


                    <div className="col-md-8">
                        <div className="card mb-4 box-shadow">
                            <div id="postDetails" className="container d-flex justify-content align-items-center">
                                <img className="rounded-circle" src="" alt="" />
                                <div id="postDetails">
                                    <strong>Veronica</strong><br/>
                                    <small>8h  •  public</small>
                                </div>
                            </div>
                            <img className="card-img-top" src=""  alt=""/>
                            <div className="card-body">
                                <p id="postext" className="card-text">Hello</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" className="btn btn-sm "><img src="" alt="" /></button>
                                    <button type="button" className="btn btn-sm "><img src="" alt="" /></button>
                                    <button type="button" className="btn btn-sm "><img src="" alt="" /></button>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <img className="rounded-circle" src="" alt="" />
                                    <textarea id="comment" type="text" className="form-control"  placeholder="write a comment..." rows="1"></textarea>
                                </div>
                             </div>
                         </div>
                    </div>

                 </div>
            </div>
        </div>
    )
}  

export default Posts;

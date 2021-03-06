import React, { Component } from 'react'

export default class Editor extends Component {
    render() {
        return (
            <div className="editor-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 col-xs-12">
                            {/* hien thi loi trong qua trinh thay doi thong tin */}
                            {/* <ListErrors errors={this.props.errors}></ListErrors> */}
                            <form>
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Article Title"
                                        />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="What's this article about?"
                                        />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="8"
                                            placeholder="Write your article (in markdown)"
                                        >
                                        </textarea>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter tags"
                                            value={this.props.tagInput}
                                        />

                                        <div className="tag-list">
                                        {/* noi hien thi danh sach cac tag khi nhan enter */}
                                            <span className="tag-default tag-pill" >
                                                <i className="ion-close-round">
                                                </i>
                                                tagName 1
                                            </span>
                                            <span className="tag-default tag-pill" >
                                                <i className="ion-close-round">
                                                </i>
                                                tagName 2
                                            </span>
                                        </div>
                                    </fieldset>
                                    <button
                                        className="btn btn-lg pull-xs-right btn-primary"
                                        type="button"
                                    >
                                        Publish Article
                                    </button>

                                </fieldset>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

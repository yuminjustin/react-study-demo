## React的异常捕捉组件
style

         .errorBox {
             padding: 8px;
             border: solid 1px #f00;
             border-radius: 6px;
             background: #ffefef;
         }

         .errorBox>p {
             height: 36px;
             padding: 0;
             margin: 0;
             color: #f60808;
         }

         .errorBox details {
             white-space: pre-wrap;
             color: #333;
             font-size: 14px;
         }

         .errorBox details span {
             color: #666;
             font-size: 12px;
         }
         
code

         class ErrorBoundary extends React.Component {
                constructor(props) {
                     super(props);
                     this.state = { error: null, errorInfo: null };
                }

                componentDidCatch(error, errorInfo) {
                     this.setState({
                         error: error,
                         errorInfo: errorInfo
                     });
                }

                render() {
                     if (this.state.errorInfo) {
                         return (
                             <div className={style.errorBox}>
                               <p>Something went wrong.</p>
                               <details>
                                 <strong>{this.state.error && this.state.error.toString()}</strong>
                                 <span>{this.state.errorInfo.componentStack}</span>
                               </details>
                             </div>
                          );
                     }
                     return this.props.children;
                 }
           }
           
use

      <ErrorBoundary>
          <某组件 />
      </ErrorBoundary>
      
      
在线示例：[【查看】](https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fcodepen.io%2Fgaearon%2Fembed%2Fpreview%2FwqvxGa%3Fheight%3D600%26slug-hash%3DwqvxGa%26default-tabs%3Djs%2Cresult%26host%3Dhttps%3A%2F%2Fcodepen.io&url=https%3A%2F%2Fcodepen.io%2Fgaearon%2Fpen%2FwqvxGa%3Feditors%3D0010&image=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fi.cdpn.io%2F215309.wqvxGa.small.df38f285-869f-4c6d-b791-49f02f985b5d.png&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=codepen)

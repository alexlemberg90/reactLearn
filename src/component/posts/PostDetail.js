export default function PostDetail(props) {
  const {location:{state: post}} = props;

  return (
    <div className={'postDetail'}>

      {JSON.stringify(post)}

    </div>
  );
}
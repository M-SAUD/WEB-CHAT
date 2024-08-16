import { MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('b7eb5a91-cc3e-4462-bd77-26f46e676d1b',
    props.user.username,
    props.user.secret);
  return (
    <div style={{height:'100vh'}}>
        <MultiChatSocket{...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
  )
}

export default ChatsPage;
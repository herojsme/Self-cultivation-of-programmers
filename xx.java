private static NiuAiTrans niuAiTrans;
public static void main(String[] args) throws Exception {
    String  appkey="";
    String  appsecret="";
    try{
        niuAiTrans=new NiuAiTrans(appkey,appsecret, new WebSocketListener() {
            @Override
            public void onMsg(String msg) throws Exception {
                JSONObject jsonObject= JSONObject.parseObject(msg);
                String msgtype=jsonObject.getString("msgType");
                int code=jsonObject.getInteger("msgCode");
                if(msgtype.equals("msgalart")){

                    switch (code){
                        case 10003:
                            System.out.println("同传开始，30秒后停止");
                            startsend();
                            break;
                        case 10004:
                            System.out.println("同传结束，连接关闭");

                            break;
                        default:
                            System.out.println("信息："+jsonObject.getString("message"));
                            System.out.println("连接关闭");
                            break;
                    }
                }else{
                    switch (code){
                        case 10002:
                            JSONObject msgobj=jsonObject.getJSONObject("res");
                            System.out.println("识别结果："+msgobj.toJSONString());
                            break;
                        default:
                            System.out.println("信息："+jsonObject.getString("message"));
                            break;
                    }

                }

            }

            @Override
            public void onBinaryMsg(ByteBuffer bytes) {

            }

            @Override
            public void onError(Exception e) {
                e.printStackTrace();
            }

            @Override
            public void onClose() {

            }
        });
        //输入音频格式，默认pcm
        niuAiTrans.setAudioType("opus");
        //是否翻译，默认翻译
        niuAiTrans.setTrans(false);
        //断句方式，0为语义断句，其他为时间间隔断句（200-2000）
        niuAiTrans.setVad(200);
        //获取同传id合集
        List<AiTransKey> lanList = niuAiTrans.getTransIds();
        //开始同传，参数为同传id
        niuAiTrans.start(lanList.get(0).getId());

    }catch (Exception e){
        e.printStackTrace();
    }
    startsend();
}
public static void startsend(){

    new Thread(new Runnable() {
        @Override
        public void run() {
            try {
                AudioFormat audioFormat = new AudioFormat(16000.0F, 16, 1, true, false);
                DataLine.Info info = new DataLine.Info(TargetDataLine.class, audioFormat);
                TargetDataLine targetDataLine = (TargetDataLine) AudioSystem.getLine(info);
                targetDataLine.open(audioFormat);
                targetDataLine.start();
                System.out.println("请开始说话!");
                int times=0;
                int nByte = 0;
                final int bufSize = 3200;//100ms数据
                byte[] buffer = new byte[bufSize];
                while ((nByte = targetDataLine.read(buffer, 0, bufSize)) > 0) {
                    niuAiTrans.send(buffer);
                    times++;
                    if(times>=100){
                        break;
                    }
                }
                targetDataLine.close();
                System.out.println("语音关闭");
                //关闭同传
                niuAiTrans.close();

            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }).start();


}

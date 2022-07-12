import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsRoundedW700'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M5.725 21.85q-.65 0-1.112-.462-.463-.463-.463-1.113V4.725q0-.65.463-1.113.462-.462 1.112-.462H13.4q.575 0 .988.35.412.35.537.925l.175.725h4.175q.65 0 1.113.462.462.463.462 1.113v8.55q0 .65-.462 1.112-.463.463-1.113.463H13.6q-.575 0-.987-.35-.413-.35-.538-.925l-.175-.725H7.3v5.425q0 .65-.462 1.113-.463.462-1.113.462ZM12.5 10Zm2.425 3.7H17.7V8.3h-5.225l-.4-2H7.3v5.4h7.225Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiFlagsRoundedW700;

import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsRoundedW700Filled'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M5.725 21.85q-.65 0-1.112-.462-.463-.463-.463-1.113V4.725q0-.65.463-1.113.462-.462 1.112-.462H13.4q.575 0 .988.362.412.363.537.913l.175.725h4.175q.65 0 1.113.462.462.463.462 1.113v8.55q0 .65-.462 1.112-.463.463-1.113.463H13.6q-.575 0-.987-.362-.413-.363-.538-.913l-.175-.725H7.3v5.425q0 .65-.462 1.113-.463.462-1.113.462Z"/>
    </Icon>
  )
});

export default IconMaterialEmojiFlagsRoundedW700Filled;

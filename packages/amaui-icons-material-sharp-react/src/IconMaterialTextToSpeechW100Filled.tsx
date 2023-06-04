import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextToSpeechW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextToSpeechW100Filled'

      short_name='TextToSpeech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 20.7q-.625 0-1.063-.438Q3.3 19.825 3.3 19.2V4.8q0-.625.437-1.063Q4.175 3.3 4.8 3.3h7.125l-.7.7H4.8q-.35 0-.575.225Q4 4.45 4 4.8v14.4q0 .35.225.575Q4.45 20 4.8 20h9.4q.35 0 .575-.225Q15 19.55 15 19.2v-1.55h.7v1.55q0 .625-.437 1.062-.438.438-1.063.438Zm1.85-3.35v-.7h5.7v.7Zm0-2.7v-.7h3.7v.7Zm7.7-.975L11.275 10.6H8.65V6.9h2.625l3.075-3.075Zm2-2.15v-5.55q.725.5 1.037 1.287.313.788.313 1.488t-.325 1.487q-.325.788-1.025 1.288Zm0 3.825v-.75q1.475-.775 2.413-2.388.937-1.612.937-3.462t-.937-3.463Q17.825 3.675 16.35 2.9v-.75q1.75.8 2.9 2.625T20.4 8.75q0 2.15-1.15 3.975-1.15 1.825-2.9 2.625Z"/>
    </Icon>
  );
});

IconMaterialTextToSpeechW100Filled.displayName = 'AmauiIconMaterialTextToSpeechW100Filled';

export default IconMaterialTextToSpeechW100Filled;

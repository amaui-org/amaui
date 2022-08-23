import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeechToTextRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeechToTextRoundedW100Filled'
      short_name='SpeechToText'

      {...props}
    >
      <path d="M16.35 9.85q-.55 0-.95-.388-.4-.387-.4-.962V4q0-.575.4-.963.4-.387.95-.387.575 0 .962.387.388.388.388.963v4.5q0 .575-.388.962-.387.388-.962.388ZM5.8 20.7q-.625 0-1.062-.438Q4.3 19.825 4.3 19.2V4.8q0-.625.438-1.063Q5.175 3.3 5.8 3.3h6.55V4H5.8q-.35 0-.575.225Q5 4.45 5 4.8v14.4q0 .35.225.575Q5.45 20 5.8 20h9.4q.35 0 .575-.225Q16 19.55 16 19.2v-1.55h.7v1.55q0 .625-.438 1.062-.437.438-1.062.438Zm1.85-3.05v-1h5.7v1Zm0-3v-.7h3.7v.7Zm9.05.7H16v-2.5q-1.825-.125-3.162-1.35-1.338-1.225-1.338-3h.7q0 1.575 1.25 2.612 1.25 1.038 2.9 1.038 1.675 0 2.913-1.038Q20.5 10.075 20.5 8.5h.7q0 1.8-1.325 3.012-1.325 1.213-3.175 1.338Z"/>
    </Icon>
  );
});

IconMaterialSpeechToTextRoundedW100Filled.displayName = 'AmauiIconMaterialSpeechToTextRoundedW100Filled';

export default IconMaterialSpeechToTextRoundedW100Filled;

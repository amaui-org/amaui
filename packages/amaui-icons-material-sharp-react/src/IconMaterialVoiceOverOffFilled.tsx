import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceOverOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceOverOffFilled'

      short_name='VoiceOverOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 10.1 8 5.2q.225-.075.475-.138Q8.725 5 9 5q1.65 0 2.825 1.175Q13 7.35 13 9q0 .275-.037.55-.038.275-.113.55ZM1 21v-2.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q7.075 14 9 14q.65 0 1.238.062.587.063 1.162.138L10 12.85q-.225.075-.475.112Q9.275 13 9 13q-1.65 0-2.825-1.175Q5 10.65 5 9q0-.275.037-.525.038-.25.113-.475L1.4 4.2l1.4-1.4 18.25 18.5-1.35 1.45L17 20v1Zm18.95-5.05L18.4 14.4q1.1-1.025 1.725-2.425T20.75 9q0-1.575-.625-2.95-.625-1.375-1.725-2.4l1.55-1.6q1.4 1.325 2.225 3.125Q23 6.975 23 9q0 2.025-.825 3.825-.825 1.8-2.225 3.125Zm-3.2-3.2-1.6-1.6q.45-.425.725-.962.275-.538.275-1.188 0-.65-.275-1.188-.275-.537-.725-.962l1.6-1.6q.8.725 1.25 1.687.45.963.45 2.063T18 11.062q-.45.963-1.25 1.688Z"/>
    </Icon>
  );
});

IconMaterialVoiceOverOffFilled.displayName = 'AmauiIconMaterialVoiceOverOffFilled';

export default IconMaterialVoiceOverOffFilled;

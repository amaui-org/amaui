import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailOffW100'

      short_name='MailOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480Zm136-16Zm239 391L708-212H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20l28 28h-48q-12 0-22 10t-10 22v416q0 12 10 22t22 10h488L129-791q-4-4-4.5-9.5T129-811q5-5 10-5t10 5l686 686q4 4 4.5 9.5T835-105q-5 5-10 5t-10-5Zm13-583v410q0 7-4.5 10.5T814-264q-5 0-9.5-3.5T800-278v-420L553-535q-6 4-11 2.5t-8-6.5q-3-5-2.5-10t6.5-9l246-162H358q-7 0-10.5-4.5T344-734q0-5 3.5-9.5T358-748h410q26 0 43 17t17 43Z"/>
    </Icon>
  );
});

IconMaterialMailOffW100.displayName = 'AmauiIconMaterialMailOffW100';

export default IconMaterialMailOffW100;

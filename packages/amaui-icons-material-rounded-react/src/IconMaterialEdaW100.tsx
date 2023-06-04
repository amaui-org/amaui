import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaW100'

      short_name='Eda'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M315 564V230q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v334h-28Zm142 0V190q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v374h-28Zm143 177V270q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v455l-28 16ZM306 950h215q13.455 0 25.227-5Q558 940 568 931l244-246-9-7q-8-6-18-6.5t-18 4.5L451 863 327 698H200v148q4 43 33.962 73.5Q263.925 950 306 950Zm0 28q-56 0-95-39t-39-95V670h169l116 155 171-100 125-73q16-9 34.5-8t32.5 12l35 26-268 268q-14 14-30.5 21t-35.799 7H306ZM200 670h-28V310q0-6 4.035-10t10-4q5.965 0 9.965 4.025t4 9.975v360Zm0-106h400-400Zm106 386H200h368-262Z"/>
    </Icon>
  );
});

IconMaterialEdaW100.displayName = 'AmauiIconMaterialEdaW100';

export default IconMaterialEdaW100;

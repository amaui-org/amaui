import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentVeryDissatisfiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentVeryDissatisfiedFilled'

      short_name='SentimentVeryDissatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.5q-1.775 0-3.137.975Q7.5 15.45 6.9 17h10.2q-.6-1.55-1.963-2.525Q13.775 13.5 12 13.5ZM7.8 12l1.1-1.05L9.95 12 11 10.95 9.95 9.9 11 8.8 9.95 7.75 8.9 8.8 7.8 7.75 6.75 8.8 7.8 9.9l-1.05 1.05Zm6.25 0 1.05-1.05L16.2 12l1.05-1.05L16.2 9.9l1.05-1.1-1.05-1.05-1.1 1.05-1.05-1.05L13 8.8l1.05 1.1L13 10.95ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSentimentVeryDissatisfiedFilled.displayName = 'AmauiIconMaterialSentimentVeryDissatisfiedFilled';

export default IconMaterialSentimentVeryDissatisfiedFilled;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentVerySatisfiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentVerySatisfiedFilled'

      short_name='SentimentVerySatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.5q1.775 0 3.137-.975Q16.5 15.55 17.1 14H6.9q.6 1.55 1.963 2.525 1.362.975 3.137.975ZM7.8 11l1.1-1.05L9.95 11 11 9.95 8.9 7.8 6.75 9.95Zm6.25 0 1.05-1.05L16.2 11l1.05-1.05L15.1 7.8 13 9.95ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSentimentVerySatisfiedFilled.displayName = 'AmauiIconMaterialSentimentVerySatisfiedFilled';

export default IconMaterialSentimentVerySatisfiedFilled;

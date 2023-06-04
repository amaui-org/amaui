import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial18UpRatingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRatingFilled'

      short_name='18UpRating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm5.5-6H10V9H7v1.5h1.5Zm3 0H16V9h-4.5Zm1.5-3.5V10h1.5v1.5Zm0 2.5v-1.5h1.5V14Z"/>
    </Icon>
  );
});

IconMaterial18UpRatingFilled.displayName = 'AmauiIconMaterial18UpRatingFilled';

export default IconMaterial18UpRatingFilled;

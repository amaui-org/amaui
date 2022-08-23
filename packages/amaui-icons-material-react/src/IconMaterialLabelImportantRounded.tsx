import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelImportantRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantRounded'
      short_name='LabelImportant'

      {...props}
    >
      <path d="M4.975 15.925 7.5 12 4.975 8.075Q4.325 7.075 4.9 6.037Q5.475 5 6.675 5H15Q15.5 5 15.938 5.225Q16.375 5.45 16.65 5.85L20.175 10.85Q20.525 11.375 20.525 12Q20.525 12.625 20.175 13.15L16.65 18.15Q16.375 18.55 15.938 18.775Q15.5 19 15 19H6.675Q5.475 19 4.9 17.962Q4.325 16.925 4.975 15.925ZM6.65 17H15Q15 17 15 17Q15 17 15 17L18.55 12L15 7Q15 7 15 7Q15 7 15 7H6.65L9.9 12ZM9.9 12 6.65 7Q6.65 7 6.65 7Q6.65 7 6.65 7L9.9 12L6.65 17Q6.65 17 6.65 17Q6.65 17 6.65 17Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantRounded.displayName = 'AmauiIconMaterialLabelImportantRounded';

export default IconMaterialLabelImportantRounded;

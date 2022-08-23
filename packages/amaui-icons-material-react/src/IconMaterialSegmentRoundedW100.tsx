import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSegmentRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentRoundedW100'
      short_name='Segment'

      {...props}
    >
      <path d="M10 17.35Q9.85 17.35 9.75 17.25Q9.65 17.15 9.65 17Q9.65 16.85 9.75 16.75Q9.85 16.65 10 16.65H20Q20.15 16.65 20.25 16.75Q20.35 16.85 20.35 17Q20.35 17.15 20.25 17.25Q20.15 17.35 20 17.35ZM4 7.35Q3.85 7.35 3.75 7.25Q3.65 7.15 3.65 7Q3.65 6.85 3.75 6.75Q3.85 6.65 4 6.65H20Q20.15 6.65 20.25 6.75Q20.35 6.85 20.35 7Q20.35 7.15 20.25 7.25Q20.15 7.35 20 7.35ZM10 12.35Q9.85 12.35 9.75 12.25Q9.65 12.15 9.65 12Q9.65 11.85 9.75 11.75Q9.85 11.65 10 11.65H20Q20.15 11.65 20.25 11.75Q20.35 11.85 20.35 12Q20.35 12.15 20.25 12.25Q20.15 12.35 20 12.35Z"/>
    </Icon>
  );
});

IconMaterialSegmentRoundedW100.displayName = 'AmauiIconMaterialSegmentRoundedW100';

export default IconMaterialSegmentRoundedW100;

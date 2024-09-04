import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceNodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceNodW100Filled'

      short_name='FaceNod'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360.16-212Q248-212 170-289.84t-78-190Q92-592 169.84-670t190-78Q472-748 550-670.16t78 190Q628-368 550.16-290t-190 78Zm-.16-28q100 0 170-70t70-170q0-17.03-2.5-32.52Q595-528 590-544q-14 3-28.5 4.5T533-538q-69 2-130.5-27T297-647q-25 58-71 100.5T120-484v3q-1 100 69.5 170.5T360-240Zm-91.5-179q-12.5 0-21-8.68-8.5-8.67-8.5-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5 12 0 21 8.68 9 8.67 9 21.5 0 12.82-9 21.32t-21.5 8.5Zm182.32 0q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM679-132v-149h28v112q58-66 95.5-144T840-479q0-88-37.5-166.5T707-790v111h-28v-149h149v29h-92q58 69 95 149.5T868-479q0 90-37 170.5T736-160h92v28H679Z"/>
    </Icon>
  );
});

IconMaterialFaceNodW100Filled.displayName = 'AmauiIconMaterialFaceNodW100Filled';

export default IconMaterialFaceNodW100Filled;

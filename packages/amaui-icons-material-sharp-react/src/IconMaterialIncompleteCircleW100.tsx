import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIncompleteCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IncompleteCircleW100'

      short_name='IncompleteCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.675-3.375Q4.65 7.05 5.85 5.85L12 12V3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialIncompleteCircleW100.displayName = 'AmauiIconMaterialIncompleteCircleW100';

export default IconMaterialIncompleteCircleW100;

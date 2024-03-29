import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSocialDistance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SocialDistance'

      short_name='SocialDistance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 7q-.825 0-1.412-.588Q4 5.825 4 5t.588-1.413Q5.175 3 6 3t1.412.587Q8 4.175 8 5q0 .825-.588 1.412Q6.825 7 6 7Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q5.25 8 6 8t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V11Zm16-4q-.825 0-1.413-.588Q16 5.825 16 5t.587-1.413Q17.175 3 18 3q.825 0 1.413.587Q20 4.175 20 5q0 .825-.587 1.412Q18.825 7 18 7Zm-4 4v-.575q0-.6.325-1.1.325-.5.9-.75.65-.275 1.337-.425Q17.25 8 18 8t1.438.15q.687.15 1.337.425.575.25.9.75.325.5.325 1.1V11ZM6 21l-4-4 4-4 1.4 1.4L5.8 16h12.4l-1.6-1.6L18 13l4 4-4 4-1.4-1.4 1.6-1.6H5.8l1.6 1.6Z"/>
    </Icon>
  );
});

IconMaterialSocialDistance.displayName = 'AmauiIconMaterialSocialDistance';

export default IconMaterialSocialDistance;

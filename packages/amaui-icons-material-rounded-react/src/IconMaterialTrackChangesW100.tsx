import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackChangesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackChangesW100'

      short_name='TrackChanges'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3q.15 0 .25.1t.1.25v7.75q.2.125.275.275.075.15.075.325 0 .275-.212.487-.213.213-.488.213t-.487-.213Q11.3 12.275 11.3 12q0-.175.075-.325.075-.15.275-.275V8.025q-1.55.125-2.6 1.262Q8 10.425 8 12q0 1.65 1.175 2.825Q10.35 16 12 16q1.65 0 2.825-1.175Q16 13.65 16 12q0-.8-.3-1.5t-.8-1.25q-.1-.125-.112-.25-.013-.125.112-.25t.263-.125q.137 0 .237.125.6.65.95 1.475.35.825.35 1.775 0 1.95-1.375 3.325Q13.95 16.7 12 16.7q-1.95 0-3.325-1.375Q7.3 13.95 7.3 12q0-1.875 1.262-3.213Q9.825 7.45 11.65 7.325V4q-3.2.125-5.425 2.438Q4 8.75 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-1.65-.612-3.075-.613-1.425-1.663-2.5-.1-.125-.112-.25-.013-.125.112-.25.1-.1.25-.1t.25.1q1.15 1.2 1.813 2.737Q20.7 10.2 20.7 12t-.687 3.387q-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialTrackChangesW100.displayName = 'AmauiIconMaterialTrackChangesW100';

export default IconMaterialTrackChangesW100;

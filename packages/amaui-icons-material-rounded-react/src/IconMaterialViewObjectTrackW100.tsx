import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewObjectTrackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewObjectTrackW100'

      short_name='ViewObjectTrack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M321-212q-45.16 0-77.08-31.89t-31.92-77Q212-366 243.92-398T321-430h398q45.16 0 77.08 31.89t31.92 77Q828-276 796.08-244T719-212H321Zm0-28h398q33.75 0 57.38-23.68Q800-287.35 800-321.18q0-33.82-23.62-57.32Q752.75-402 719-402H321q-33.75 0-57.37 23.68Q240-354.65 240-320.82q0 33.82 23.63 57.32Q287.25-240 321-240Zm-80-290q-45.16 0-77.08-31.89t-31.92-77Q132-684 163.92-716T241-748h398q45.16 0 77.08 31.89t31.92 77Q748-594 716.08-562T639-530H241Zm-1-28h399q33.75 0 57.38-23.68Q720-605.35 720-639.18q0-33.82-23.62-57.32Q672.75-720 639-720H240q-33.33 0-56.67 23.68Q160-672.65 160-638.82q0 33.82 23.33 57.32Q206.67-558 240-558Zm280 237Zm-80-318Z"/>
    </Icon>
  );
});

IconMaterialViewObjectTrackW100.displayName = 'AmauiIconMaterialViewObjectTrackW100';

export default IconMaterialViewObjectTrackW100;

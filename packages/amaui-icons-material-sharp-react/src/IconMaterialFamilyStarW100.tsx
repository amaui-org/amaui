import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyStarW100'

      short_name='FamilyStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.825-348Q518-348 548-371.5t44-58.5H368q14 35 43.825 58.5 29.824 23.5 68 23.5Zm-79.59-136Q417-484 428.5-495.735q11.5-11.736 11.5-28.5Q440-541 428.265-552.5q-11.736-11.5-28.5-11.5Q383-564 371.5-552.265q-11.5 11.736-11.5 28.5Q360-507 371.735-495.5q11.736 11.5 28.5 11.5Zm160 0Q577-484 588.5-495.735q11.5-11.736 11.5-28.5Q600-541 588.265-552.5q-11.736-11.5-28.5-11.5Q543-564 531.5-552.265q-11.5 11.736-11.5 28.5Q520-507 531.735-495.5q11.736 11.5 28.5 11.5ZM331-668l149-200 149 200 237 80-153 204 6 233-239-71-239 71 6-234L95-588l236-80Zm18 24-207 71 134 180-6 203 210-61 210 63-6-205 134-178-207-73-131-176-131 176Zm131 140Z"/>
    </Icon>
  );
});

IconMaterialFamilyStarW100.displayName = 'AmauiIconMaterialFamilyStarW100';

export default IconMaterialFamilyStarW100;

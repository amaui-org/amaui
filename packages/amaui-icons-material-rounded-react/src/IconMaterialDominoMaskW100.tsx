import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDominoMaskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DominoMaskW100'

      short_name='DominoMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-292q-40 0-78.5-14.5T166-348q-38-37-56-89.5T92-545q0-54 25-88.5t73-34.5q8 0 16.5 1.5T223-662l257 97 257-97q8-3 16.5-4.5T770-668q48 0 73 34.5t25 88.5q0 55-18 107.5T794-348q-29 27-67.5 41.5T648-292q-52 0-95.5-30L509-352h-58l-43.5 30Q364-292 312-292Zm0-28q37 0 69-17.5t59-42.5h80q27 25 59 42.5t69 17.5q36 0 69.5-12.5T777-371q34-34 48.5-80t14.5-94q0-41-17-68.5T769-640q-3 0-22 4L480-536 213-636q-5-2-10.5-3t-11.5-1q-37 0-54 27t-17 68q0 49 14.5 95t49.5 80q26 25 59 37.5t69 12.5Zm49-76q29 0 45.5-12t17.5-34q-2-43-61-82.5T239-564q-29 0-45.5 12T176-518q2 43 61 82.5T361-396Zm0-28q-54 0-104-30.5T204-518q1-8 10-13t25-5q54 0 104 30.5t53 63.5q-1 8-10 13t-25 5Zm238 29q65 0 124-40t61-83q-1-21-17.5-34T721-565q-64 2-123.5 41.5T536-442q1 21 17.5 34t45.5 13Zm0-28q-15-1-24.5-6T564-442q3-32 53-62.5T721-537q15 1 24.5 6t10.5 13q-3 33-53 64t-104 31Zm-119-57Z"/>
    </Icon>
  );
});

IconMaterialDominoMaskW100.displayName = 'AmauiIconMaterialDominoMaskW100';

export default IconMaterialDominoMaskW100;

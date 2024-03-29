import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOnsen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Onsen'

      short_name='Onsen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M270 616q5-15 7.5-28.5T280 558q0-30-15-52t-34-47q-19-25-34-55.5T182 325q0-15 1.5-32t5.5-37h81q-5 23-6.5 38t-1.5 28q0 37 15.5 61.5T311 432q18 24 33.5 53t15.5 75q0 14-2 28t-6 28h-82Zm160 0q5-15 7.5-28.5T440 558q0-30-15-52t-34-47q-19-25-34-55.5T342 325q0-15 1.5-32t5.5-37h81q-5 23-7 38t-2 28q0 37 15.5 61.5T470 432q18 24 33.5 53t15.5 75q0 14-1.5 28t-5.5 28h-82Zm160 0q5-15 7.5-28.5T600 558q0-30-15-52t-34-47q-19-25-34-55.5T502 325q0-15 1.5-32t5.5-37h81q-5 23-7 38t-2 28q0 37 15.5 61.5T630 432q18 24 33.5 53t15.5 75q0 14-1.5 28t-5.5 28h-82ZM480 896q-149 0-254.5-58.5T120 696q0-43 31-81.5t89-67.5v93q-20 14-30 28.5T200 696q0 45 87 82.5T480 816q106 0 193-37.5t87-82.5q0-13-10-27.5T720 640v-93q58 29 89 67.5t31 81.5q0 83-105 141.5T480 896Z"/>
    </Icon>
  );
});

IconMaterialOnsen.displayName = 'AmauiIconMaterialOnsen';

export default IconMaterialOnsen;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalMaskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalMaskW100'

      short_name='MedicalMask'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M479.879 802Q412 802 345.5 796.5 279 791 212 783v-78.07q-45-10.93-73-46.916T111 576q0-45.514 28-81.757T212 447V347q67 8 133.621 13.5 66.622 5.5 134.5 5.5Q548 366 614.5 360q66.5-6 133.5-13v100q45 11 73 46.821 28 35.822 28 82.179t-28 82.179Q793 694 748 704.835V783q-67 7-133.621 13-66.622 6-134.5 6Zm.121-26q60 0 120-5t120-13V376q-60 8-120 13t-120 5q-60 0-120-5t-120-13v382q60 8 120 13t120 5Zm-.175-87Q523 689 565 683t84-17v-28q-42 11-84.053 17-42.052 6-85 6Q437 661 395 655t-84-17v29q42 11 83.825 16.5 41.826 5.5 85 5.5ZM212 676V476q-32 11-52.5 38.5T139 576q0 33.759 20.5 61.379Q180 665 212 676Zm536 0q32-11 52.5-38.621Q821 609.759 821 576q0-35-20.5-62T748 476v200ZM479.825 530Q523 530 565 524t84-17v-28q-42 11-84.053 17-42.052 6-85 6Q437 502 395 496t-84-17v29q42 11 83.825 16.5 41.826 5.5 85 5.5ZM240 758V376v382Z"/>
    </Icon>
  );
});

IconMaterialMedicalMaskW100.displayName = 'AmauiIconMaterialMedicalMaskW100';

export default IconMaterialMedicalMaskW100;

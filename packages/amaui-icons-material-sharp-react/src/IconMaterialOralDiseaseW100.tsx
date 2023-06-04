import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOralDiseaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OralDiseaseW100'

      short_name='OralDisease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.2V13h1.5V9.3L5.15 6.15l3.1-3.075.475.475-2.575 2.6L9 9v4h1.5v7.2Zm6.7 0V13H15V9.975q-1.05-.125-1.775-.925-.725-.8-.725-1.9 0-1.2.825-2.025T15.35 4.3q1.2 0 2.025.825T18.2 7.15q0 1.1-.725 1.9-.725.8-1.775.925V13h1.5v7.2Zm1.85-10.9q.9 0 1.525-.638.625-.637.625-1.512 0-.9-.625-1.525Q16.25 5 15.35 5q-.875 0-1.512.625-.638.625-.638 1.525 0 .875.638 1.512.637.638 1.512.638ZM7.5 19.5h2.3v-5.8H7.5Zm6.7 0h2.3v-5.8h-2.3Zm-6.7 0h2.3Zm6.7 0h2.3Z"/>
    </Icon>
  );
});

IconMaterialOralDiseaseW100.displayName = 'AmauiIconMaterialOralDiseaseW100';

export default IconMaterialOralDiseaseW100;

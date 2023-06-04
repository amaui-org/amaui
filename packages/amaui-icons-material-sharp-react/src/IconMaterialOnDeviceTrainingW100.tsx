import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOnDeviceTrainingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnDeviceTrainingW100'

      short_name='OnDeviceTraining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.4 16.4v-.7h1.2v.7Zm0-1.2v-.7q-.425-.25-.712-.625Q10.4 13.5 10.4 13q0-.65.475-1.125T12 11.4q.65 0 1.125.475T13.6 13q0 .5-.288.875-.287.375-.712.625v.7Zm4.55.125-.525-.5q.225-.425.35-.887.125-.463.125-.938 0-.475-.125-.938-.125-.462-.35-.887l.525-.5q.325.525.488 1.112.162.588.162 1.213 0 .625-.162 1.212-.163.588-.488 1.113Zm-7.9 0q-.325-.525-.488-1.113Q7.4 13.625 7.4 13q0-1.925 1.338-3.263Q10.075 8.4 12 8.4v-.75l1.25 1.1L12 9.85V9.1q-1.625 0-2.762 1.138Q8.1 11.375 8.1 13q0 .475.125.938.125.462.35.887ZM5.3 21.7V2.3h13.4v19.4Zm.7-3.05h12V5.35H6Zm0 .7V21h12v-1.65Zm0-14.7h12V3H6ZM6 3v1.65Zm0 18v-1.65Z"/>
    </Icon>
  );
});

IconMaterialOnDeviceTrainingW100.displayName = 'AmauiIconMaterialOnDeviceTrainingW100';

export default IconMaterialOnDeviceTrainingW100;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNaturePeopleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NaturePeopleW100'

      short_name='NaturePeople'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.6 12.8q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.712.287q.288.288.288.713t-.288.712q-.287.288-.712.288Zm-.7 8.55v-3.7h-.7V13.8H6v3.85h-.7v3h9.45V14.2h-2.4q-1.25 0-2.1-.838-.85-.837-.85-1.962 0-1.025.675-1.863Q10.75 8.7 11.8 8.25q0-1.575 1.05-2.513Q13.9 4.8 15.1 4.8t2.25.937q1.05.938 1.05 2.513 1.05.45 1.725 1.287.675.838.675 1.863 0 1.125-.85 1.962-.85.838-2.1.838h-2.4v6.45h5v.7Zm8.45-7.85h5.5q.925 0 1.588-.613.662-.612.662-1.487 0-.85-.55-1.488-.55-.637-1.35-.962l-.5-.2v-.5q0-1.125-.75-1.938Q16.2 5.5 15.1 5.5t-1.85.812q-.75.813-.75 1.938v.5l-.5.2q-.8.325-1.35.962-.55.638-.55 1.488 0 .875.663 1.487.662.613 1.587.613Zm2.75-4Z"/>
    </Icon>
  );
});

IconMaterialNaturePeopleW100.displayName = 'AmauiIconMaterialNaturePeopleW100';

export default IconMaterialNaturePeopleW100;

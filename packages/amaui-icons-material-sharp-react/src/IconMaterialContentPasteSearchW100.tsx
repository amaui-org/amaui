import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteSearchW100'

      short_name='ContentPasteSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h6.275q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H19.7v6.6H19V5h-3.3v2H8.3V5H5v14h5.9v.7Zm16.15 1.25-2.5-2.475q-.525.35-.988.487-.462.138-.962.138-1.3 0-2.2-.9-.9-.9-.9-2.2 0-1.3.9-2.2.9-.9 2.2-.9 1.3 0 2.2.9.9.9.9 2.2 0 .6-.187 1.125-.188.525-.463.825l2.5 2.5ZM16 18.4q1.025 0 1.713-.688.687-.687.687-1.712t-.687-1.713Q17.025 13.6 16 13.6q-1.025 0-1.712.687-.688.688-.688 1.713 0 1.025.688 1.712.687.688 1.712.688ZM12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialContentPasteSearchW100.displayName = 'AmauiIconMaterialContentPasteSearchW100';

export default IconMaterialContentPasteSearchW100;

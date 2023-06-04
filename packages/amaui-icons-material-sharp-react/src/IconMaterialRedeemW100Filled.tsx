import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRedeemW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedeemW100Filled'

      short_name='Redeem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 16.45V19h16v-2.55Zm-.7 3.25V7.35h5.175q-.125-.225-.225-.475-.1-.25-.1-.525 0-.725.487-1.213.488-.487 1.213-.487.425 0 .8.225.375.225.65.575l.65.9.65-.9q.275-.35.65-.575.375-.225.8-.225.725 0 1.212.487.488.488.488 1.213 0 .275-.087.525-.088.25-.238.475H20.7V19.7Zm.7-5.15h16v-6.5h-6.85l1.95 2.7-.55.4-2.6-3.55-2.6 3.55-.55-.4 1.95-2.7H4Zm5.85-7.2q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288Zm4.2 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialRedeemW100Filled.displayName = 'AmauiIconMaterialRedeemW100Filled';

export default IconMaterialRedeemW100Filled;

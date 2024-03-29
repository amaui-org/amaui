import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVapeFreeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VapeFreeFilled'

      short_name='VapeFree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19q-.975-.25-1.987-.375Q4 18.5 3 18.5H2v-2h1q1 0 2.013-.125Q6.025 16.25 7 16Zm12.775 3.6-3.6-3.6H8v-3h5.175L1.4 4.225 2.8 2.8l18.375 18.4Zm2.05-3.6-3-3H22v3ZM10.5 18q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm10-3v-2.225q0-1.7-1.15-2.888Q18.2 8.7 16.5 8.7V7.2q.775 0 1.312-.538.538-.537.538-1.312t-.538-1.313Q17.275 3.5 16.5 3.5V2q1.4 0 2.375.975.975.975.975 2.375 0 .7-.262 1.312-.263.613-.738 1.063 1.425.675 2.288 2.012Q22 11.075 22 12.75V15ZM18 15v-1.3q0-.975-.587-1.512-.588-.538-1.388-.538H14.475L11.15 8.325V8.3q0-1.4.975-2.375.975-.975 2.375-.975v1.5q-.775 0-1.312.488-.538.487-.538 1.262t.538 1.387q.537.613 1.312.613h1.525q1.425 0 2.45.9 1.025.9 1.025 2.25V15Z"/>
    </Icon>
  );
});

IconMaterialVapeFreeFilled.displayName = 'AmauiIconMaterialVapeFreeFilled';

export default IconMaterialVapeFreeFilled;

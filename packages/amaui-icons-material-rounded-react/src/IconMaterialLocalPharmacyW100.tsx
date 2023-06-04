import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPharmacyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacyW100'

      short_name='LocalPharmacy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.7 19.7q-.175 0-.288-.113-.112-.112-.112-.287v-.1q0-.05.025-.1L6.35 13 4.325 6.9Q4.3 6.85 4.3 6.8v-.1q0-.175.112-.288.113-.112.288-.112h11.5l1.175-3.275q.05-.125.187-.188.138-.062.263-.012t.187.187q.063.138.013.263L16.95 6.3h2.35q.175 0 .288.112.112.113.112.288v.1q0 .05-.025.1L17.65 13l2.025 6.1q.025.05.025.1v.1q0 .175-.112.287-.113.113-.288.113Zm7.3-3.6q.15 0 .25-.1t.1-.25v-2.4h2.4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.4v-2.4q0-.15-.1-.25T12 9.9q-.15 0-.25.1t-.1.25v2.4h-2.4q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.4v2.4q0 .15.1.25t.25.1ZM5.1 19h13.8l-2-6 2-6H5.1l2 6Zm6.9-6Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacyW100.displayName = 'AmauiIconMaterialLocalPharmacyW100';

export default IconMaterialLocalPharmacyW100;

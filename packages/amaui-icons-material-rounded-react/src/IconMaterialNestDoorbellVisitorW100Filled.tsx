import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestDoorbellVisitorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDoorbellVisitorW100Filled'

      short_name='NestDoorbellVisitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.35q-1.825 0-3.087-1.263Q7.65 18.825 7.65 17V7q0-1.825 1.263-3.088Q10.175 2.65 12 2.65q1.825 0 3.088 1.262Q16.35 5.175 16.35 7v5H13.5q-.625 0-1.062.425Q12 12.85 12 13.5v.65q-.775 0-1.312.538-.538.537-.538 1.312 0 .725.525 1.263.525.537 1.325.587Zm2.65 0v-.575q0-.8.95-1.3t2.4-.5q1.475 0 2.413.5.937.5.937 1.3v.575ZM12 17.15q-.525 0-.837-.362-.313-.363-.313-.788 0-.425.313-.788.312-.362.837-.362.525 0 .838.312.312.313.312.838 0 .425-.312.788-.313.362-.838.362Zm6.025-.45q-.575 0-.975-.4t-.4-.975q0-.55.4-.938.4-.387.975-.387.55 0 .937.387.388.388.388.963 0 .55-.388.95-.387.4-.937.4ZM12 9.85q.775 0 1.312-.538.538-.537.538-1.312t-.538-1.313Q12.775 6.15 12 6.15t-1.312.537Q10.15 7.225 10.15 8q0 .775.538 1.312.537.538 1.312.538Z"/>
    </Icon>
  );
});

IconMaterialNestDoorbellVisitorW100Filled.displayName = 'AmauiIconMaterialNestDoorbellVisitorW100Filled';

export default IconMaterialNestDoorbellVisitorW100Filled;

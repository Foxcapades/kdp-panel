export enum TargetType {
  CHART            = "chart",
  TABLE            = "table",
  DYNAMIC_DROPDOWN = "dynamic-dropdown",
}

export class KdpTarget<T> {
  readonly id: string;
  readonly type: TargetType;
  readonly meta: T;

  constructor(
    id: string,
    type: TargetType,
    meta: T
  ) {
    this.id = id;
    this.type = type;
    this.meta = meta;
  }

  toJSON(): Object {
    return {
      id: this.id,
      type: this.type,
      metadata: this.meta
    };
  }
}

export class KdpTableTarget extends KdpTarget <Array<string>> {
  constructor(id: string, meta: Array<string>) {
    super(id, TargetType.TABLE, meta);
  }

  toJSON(): Object {
    return super.toJSON();
  }
}

export class KdpChartTarget extends KdpTarget <string> {
  constructor(id: string, meta: string) {
    super(id, TargetType.CHART, meta);
  }

  toJSON(): Object {
    return super.toJSON();
  }
}

export class KdpDDTarget extends KdpTarget <string> {
  constructor(id: string) {
    super(id, TargetType.DYNAMIC_DROPDOWN, "STRING");
  }

  toJSON(): Object {
    return super.toJSON();
  }
}
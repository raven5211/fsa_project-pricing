/**
 * @param {number} cost - original cost of a project
 * @param {number} discount - percentage (e.g. 0.1 for 10% off)
 * @returns {number} the final cost after applying the discount
 */
function applyDiscount(cost, discount) {
  return cost * (1 + discount);
}

/**
 * | Size   | Estimated Time  |
 * | ---    | ---             |
 * | Tiny   | 3 days          |
 * | Small  | 15 days         |
 * | Medium | 6 weeks         |
 * | Large  | 12 weeks        |
 *
 * @param {string} size - "tiny", "small", "medium", or "large"
 * @returns {number} the number of hours the project is estimated to take
 */
function estimateHours(size) {
  if (size === "tiny") {
    return 3 * 8;
  } else if (size === "small") {
    return 15 * 8;
  } else if (size === "medium") {
    return 6 * 40;
  } else if (size === "large") {
    return 12 * 40;
  }
}

/**
 * TODO
 */
function calculateProjectCost(size, rate, isVip) {
  const hours = estimateHours(size);
  const subtotal = hours * rate;

  if (isVip) {
    return applyDiscount(subtotal, 0.1);
  } else {
    return subtotal;
  }
}

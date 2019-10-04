<?php
/**
 * @OA\Schema(
 *     description="product collection",
 *     type="object",
 *     title="Product request",
 * )
 */
class ProductRequest
{
    /**
     * @OA\Property(
     *     title="Shop",
     *     description="relations shop->id",
     *     format="int64",
     *     example="1"
     * )
     *
     * @var int
     */
    public $shop_id;
    /**
     * @OA\Property(
     *     title="Name",
     *     description="Name of product",
     *     format="string",
     *     example="potato"
     * )
     *
     * @var string
     */
    public $name;
    /**
     * @OA\Property(
     *     title="Brand",
     *     description="Brand of product",
     *     format="string",
     *     example="potatos inc"
     * )
     *
     * @var string
     */
    public $brand;
    /**
     * @OA\Property(
     *     title="Brand",
     *     description="Description of product",
     *     format="string",
     *     example="some description"
     * )
     *
     * @var string
     */
    public $description;
    /**
     * @OA\Property(
     *     title="Url",
     *     description="Url of product",
     *     format="string",
     *     example="potatourl"
     * )
     *
     * @var string
     */
    public $slug;
    /**
     * @OA\Property(
     *     title="Active",
     *     description="Product status",
     *     format="tinyint",
     *     example="1 or 0"
     * )
     *
     * @var int
     */
    public $active;
